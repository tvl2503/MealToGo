import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const LoadingActivity = ({color}) => {
    return (
        <LoadingContainer>
            <Loading size={50} animating={true} color={color} />
        </LoadingContainer>
    )
}
export default LoadingActivity