import SocialMediaBox from "../../../../components/SocialBox";
import * as S from "../../style";
import { ReactComponent as Linkedin } from "../../../../assets/svg/linkedin.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/svg/instagram.svg";

const Media = () => {
    return (
        <S.SocialMediaContainer>
            <div>
                <S.Title>contate me</S.Title>
                <S.Text>tn-junior@hotmail.com</S.Text>
            </div>
            <div>
                <S.Title>Follow me</S.Title>
                <S.LinksContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.linkedin.com/in/tarynascimento/">
                            <Linkedin />
                        </SocialMediaBox>
                        <div>/Tary Junior</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://github.com/tn-junior/">
                            <GitHub />
                        </SocialMediaBox>
                        <div>/tn-junior</div>
                    </S.MediaContainer>
                    <S.MediaContainer>
                        <SocialMediaBox url="https://www.instagram.com/taryjunioor/">
                            <Instagram />
                        </SocialMediaBox>
                        <div>/taryjunioor</div>
                    </S.MediaContainer>
                </S.LinksContainer>
            </div>
        </S.SocialMediaContainer>
    );
};

export default Media;
