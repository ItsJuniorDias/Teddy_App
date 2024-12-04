import styled from "styled-components/native";
import { theme } from "../../../uikit";

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background-color: ${() => theme.colors.primaryButton};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-family: ${() => theme.fonts.bold};
  font-size: 18px;
  color: ${() => theme.colors.white};
  font-weight: 700;
`;
