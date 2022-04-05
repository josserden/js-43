const profileContainer = document.querySelector('.js-profile-container');

export function renderUser({ avatar_url, name, location, bio, public_repos, followers, html_url }) {
  profileContainer.innerHTML = `
  <div class="card mx-auto" style="width: 18rem">
  <img src="${avatar_url}" class="card-img-top rounded" alt="${name} avatar" />
  <div class="card-body">

    ${name ? `<h4 class="card-title"><strong>${name}</strong></h4>` : ''}
    ${bio ? `<p class="card-text text-muted"><small>${bio}</small></p>` : ''}
    ${location ? `<p class="card-text"><u>${location}</u></p>` : ''}

    <ul class="list-group mb-4">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Followers
        <span class="badge bg-primary rounded-pill">${followers}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Public repos
        <span class="badge bg-primary rounded-pill">${public_repos}</span>
      </li>
    </ul>
    <a href="${html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"
      >Go to profile</a
    >
  </div>
</div>`;
}
