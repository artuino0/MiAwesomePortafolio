import selfie from "../../assets/selfie.png";

const SelfieImage = ({ isHidden, className, style }: { isHidden?: boolean; className?: any; style?: any }) => <img src={selfie} alt="selfie" className={`${isHidden ? "hidden" : ""} ${className} select-none`} style={style} />;

export default SelfieImage;
