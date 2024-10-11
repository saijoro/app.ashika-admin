import { Button } from "@/components/ui/button";
import React from "react";

interface ActionButtonsProps {
  loading: boolean;
  onCancel: () => void;
  onSave: () => void;
}

const ActionButtons = ({ loading, onCancel, onSave }: ActionButtonsProps) => (
  <div className="flex justify-end space-x-4">
    <Button variant="outline" className="w-1/4   h-[30px]" onClick={onCancel}>
      Cancel
    </Button>
    <Button
      variant="default"
      className="w-1/4   h-[30px]"
      onClick={onSave}
      disabled={loading}
    >
      Save
    </Button>
  </div>
);

export default ActionButtons;
