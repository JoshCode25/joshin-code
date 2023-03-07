<div>
	<h3>developing</h3>
	<h4>
		<span>{'<'}</span>
		josh
		<span>{'/>'}</span>
	</h4>
</div>

<style>
	div {
		margin: 1rem 2rem;
		text-align: left;
	}
	h3,
	h4 {
		font-size: 2rem;
		color: var(--primary-light);
	}
	@keyframes glow {
		0% {
			color: white;
		}
		20% {
			color: yellow;
		}
		40% {
			color: orange;
		}
		60% {
			color: red;
		}
		80% {
			color: orange;
		}
		100% {
			color: yellow;
		}
	}
	span {
		animation-name: glow;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	}
</style>
