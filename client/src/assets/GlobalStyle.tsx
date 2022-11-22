import { Global, css } from "@emotion/react"

const style = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		border: 0;
		padding: 0;
	}

	html {
		font-size: 16px;
	}

	select,
	input,
	button,
	textarea {
		outline: 0 !important;
	}

	ul,
	ol,
	li {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`

const GlobalStyle = () => {
	return <Global styles={style}></Global>
}

export default GlobalStyle
