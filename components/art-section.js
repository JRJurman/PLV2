define`
	<art-section>
		<style>
			header {
				display: flex;
				flex-direction: row;
			}
		</style>
		<header>
			<img src="https://placekitten.com/400/100"><h2>Cityscapes</h2>
		</header>
		<art-piece></art-piece>
		<script>
			initializeArtSection(this)
		</script>
	</art-section>
`;

function initializeArtSection(artSection) {
	const key = artSection.getAttribute('key');
	console.log({ key });

	// BUILD MOCK DATA STRUCT, and pull in data by key
