import { Button } from "@/components/ui/button";
import React from "react";

interface ActionButtonsProps {
  loading: boolean;
  onCancel: () => void;
  onSave: () => void;
}

const ActionButtons = ({ loading, onCancel, onSave }: ActionButtonsProps) => (
  <div className="flex justify-end space-x-4">
    <Button variant="ghost" className="w-1/3" onClick={onCancel}>
      Cancel
    </Button>
    <Button
      variant="default"
      className="w-1/3"
      onClick={onSave}
      disabled={loading}
    >
      Save
    </Button>
  </div>
);

export default ActionButtons;
