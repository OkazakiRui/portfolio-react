import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const SectionTitleStyle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 9;
    left: -28px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border: 2px solid #f858f1;
    border-radius: 50%;
  }
`;
const SectionTitle = tw(SectionTitleStyle)`
  font-normal relative text-pink1
`;

export default SectionTitle;
