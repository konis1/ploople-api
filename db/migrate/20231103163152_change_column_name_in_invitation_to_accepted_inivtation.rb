class ChangeColumnNameInInvitationToAcceptedInivtation < ActiveRecord::Migration[7.0]
  def change
    rename_column :invitations, :invitation_status, :accepted_invitation
  end
end
