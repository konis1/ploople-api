class AddInivitationStatutToInvite < ActiveRecord::Migration[7.0]
  def change
    add_column :invitations, :invitation_status, :boolean
    add_column :invitations, :pending_invitation, :boolean
  end
end
