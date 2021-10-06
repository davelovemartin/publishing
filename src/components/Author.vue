<template>
	<div class="author h-card">
		<a class="u-url" rel="me" href="https://davelovemartin.dev/">
			<g-image alt="Author image" class="author__image u-logo" src="~/assets/images/author.jpg" width="180" height="180" blur="5" />

			<h1 v-if="showTitle" class="author__site-title p-nickname">
				{{ $static.metadata.siteName }}
			</h1>
		</a>

		<p class="author__intro p-role">
			Creative Technologist
		</p>

		<p class="author__intro p-note">
			– Building to learn 💻  Iterating to innovate 🚀
		</p>
		<p class="author__links">
			<a rel="me" href="//twitter.com/davelovemartin">Follow me on Twitter</a>
			<a rel="me" href="//github.com/davelovemartin/davelovemartin	">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
.u-url {
	text-decoration: none;
}
</style>
