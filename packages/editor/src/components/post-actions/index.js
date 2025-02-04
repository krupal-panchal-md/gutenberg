/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useMemo, useState, Fragment, Children } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	privateApis as componentsPrivateApis,
	Button,
	Modal,
} from '@wordpress/components';
import { moreVertical } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import { usePostActions } from './actions';
import { store as editorStore } from '../../store';

const {
	DropdownMenuV2: DropdownMenu,
	DropdownMenuGroupV2: DropdownMenuGroup,
	DropdownMenuItemV2: DropdownMenuItem,
	DropdownMenuItemLabelV2: DropdownMenuItemLabel,
	DropdownMenuSeparatorV2: DropdownMenuSeparator,
	kebabCase,
} = unlock( componentsPrivateApis );

const POST_ACTIONS_WHILE_EDITING = [
	'view-post',
	'view-post-revisions',
	'rename-post',
	'move-to-trash',
];

export default function PostActions( { onActionPerformed } ) {
	const { postType, postId } = useSelect( ( select ) => {
		const { getCurrentPostType, getCurrentPostId } = select( editorStore );
		return {
			postType: getCurrentPostType(),
			postId: getCurrentPostId(),
		};
	} );
	const actions = usePostActions(
		onActionPerformed,
		POST_ACTIONS_WHILE_EDITING
	);
	const item = useSelect(
		( select ) => {
			const { getEditedEntityRecord } = select( coreStore );
			return getEditedEntityRecord( 'postType', postType, postId );
		},
		[ postType, postId ]
	);

	const { primaryActions, secondaryActions } = useMemo( () => {
		return actions.reduce(
			( accumulator, action ) => {
				if ( action.isEligible && ! action.isEligible( item ) ) {
					return accumulator;
				}
				if ( action.isPrimary ) {
					accumulator.primaryActions.push( action );
				} else {
					accumulator.secondaryActions.push( action );
				}
				return accumulator;
			},
			{ primaryActions: [], secondaryActions: [] }
		);
	}, [ actions, item ] );
	return (
		<DropdownMenu
			trigger={
				<Button
					size="compact"
					icon={ moreVertical }
					label={ __( 'Actions' ) }
					disabled={
						! primaryActions.length && ! secondaryActions.length
					}
					className="editor-all-actions-button"
				/>
			}
			placement="bottom-end"
		>
			<WithDropDownMenuSeparators>
				{ !! primaryActions.length && (
					<ActionsDropdownMenuGroup
						actions={ primaryActions }
						item={ item }
					/>
				) }
				{ !! secondaryActions.length && (
					<ActionsDropdownMenuGroup
						actions={ secondaryActions }
						item={ item }
					/>
				) }
			</WithDropDownMenuSeparators>
		</DropdownMenu>
	);
}

// From now on all the functions on this file are copied as from the dataviews packages,
// The editor packages should not be using the dataviews packages directly,
// and the dataviews package should not be using the editor packages directly,
// so duplicating the code here seems like the least bad option.

// Copied as is from packages/dataviews/src/item-actions.js
function DropdownMenuItemTrigger( { action, onClick } ) {
	return (
		<DropdownMenuItem
			onClick={ onClick }
			hideOnClick={ ! action.RenderModal }
		>
			<DropdownMenuItemLabel>{ action.label }</DropdownMenuItemLabel>
		</DropdownMenuItem>
	);
}

// Copied as is from packages/dataviews/src/item-actions.js
function ActionWithModal( { action, item, ActionTrigger } ) {
	const [ isModalOpen, setIsModalOpen ] = useState( false );
	const actionTriggerProps = {
		action,
		onClick: () => setIsModalOpen( true ),
	};
	const { RenderModal, hideModalHeader } = action;
	return (
		<>
			<ActionTrigger { ...actionTriggerProps } />
			{ isModalOpen && (
				<Modal
					title={ action.modalHeader || action.label }
					__experimentalHideHeader={ !! hideModalHeader }
					onRequestClose={ () => {
						setIsModalOpen( false );
					} }
					overlayClassName={ `editor-action-modal editor-action-modal__${ kebabCase(
						action.id
					) }` }
				>
					<RenderModal
						items={ [ item ] }
						closeModal={ () => setIsModalOpen( false ) }
					/>
				</Modal>
			) }
		</>
	);
}

// Copied as is from packages/dataviews/src/view-table.js
function WithDropDownMenuSeparators( { children } ) {
	return Children.toArray( children )
		.filter( Boolean )
		.map( ( child, i ) => (
			<Fragment key={ i }>
				{ i > 0 && <DropdownMenuSeparator /> }
				{ child }
			</Fragment>
		) );
}

// Copied as is from packages/dataviews/src/item-actions.js
function ActionsDropdownMenuGroup( { actions, item } ) {
	return (
		<DropdownMenuGroup>
			{ actions.map( ( action ) => {
				if ( action.RenderModal ) {
					return (
						<ActionWithModal
							key={ action.id }
							action={ action }
							item={ item }
							ActionTrigger={ DropdownMenuItemTrigger }
						/>
					);
				}
				return (
					<DropdownMenuItemTrigger
						key={ action.id }
						action={ action }
						onClick={ () => action.callback( [ item ] ) }
					/>
				);
			} ) }
		</DropdownMenuGroup>
	);
}
