import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../../assets/images/logo-won.svg";

const Wrapper = styled.div`
  background-color: #06081b;
  height: ${(props) => props.theme.main.sizes.leftMenu.height};
  .projectName {
    display: block;
    height: ${(props) => props.theme.main.sizes.leftMenu.height};
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 12rem;
  }
`;

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;