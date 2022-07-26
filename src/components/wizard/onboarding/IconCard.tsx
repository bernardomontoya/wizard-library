import React from 'react';

type IconCardProps = {
  icon: React.FC;
  label: string;
};

const IconCard: React.FC<IconCardProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center h-20">
        <Icon />
      </div>
      <p className="font-bold">{label}</p>
    </div>
  );
};

export default IconCard;
