function fetchData() {
	fetch("https://backend.scrapshut.com/api/service/post/?format=json")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.results);
			const html = data.results
				.map((user) => {
					return `<div class="user card card-body mb-3">
					<h4>Author: ${user.author}</h4>
					<p>Publish: ${user.created_at}</p>
					<p>Rate: ${user.rate}</p>
					<button class="mdc-button">
  <span class="mdc-button__label"><a href=${user.url}>See Project</a>
  </span>
</button>

					<p>Review: ${user.review}</p>
					</div>
					`;
				})
				.join("");
			console.log(html);
			document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
		})
		.catch((error) => console.error(error));
}
fetchData();
