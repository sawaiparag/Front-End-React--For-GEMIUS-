
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const NavLink = styled(Link)`
color: #808080;
padding: 0 1rem;
cursor: pointer;
&.active {
	color: #4d4dff;
}
`;

