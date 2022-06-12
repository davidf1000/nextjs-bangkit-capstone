export interface TeamProfileProps {
  name: string;
  role: string;
  picture: string;
}

export interface NavBarProps {
  login: boolean;
}

export interface Resource {
  title: string;
  imagePath: string;
}

export interface ModalProps {
  setShowModal: Function;
  resource: Resource;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export interface Resource {
  title: string;
  imagePath: string;
}

export interface CarouselProps {
  data: {
    resources: Resource[];
  };
}
