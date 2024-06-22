import * as S from "./style";
import PropTypes from "prop-types";

const SocialMediaBox = ({ children, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <S.SocialContainer>{children}</S.SocialContainer>
        </a>
    );
};

SocialMediaBox.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired
};

export default SocialMediaBox;
