import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import * as APIService from './js/api/api';
import { getRefs } from './js/getRefs';
const { commentsContainer } = getRefs();
import { renderComments } from './js/renderComments';
import { LoadMoreBtn } from './js/loadMoreBtn';
import { showNotify } from './js/showNotify';

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more-btn',
  className: 'is-hidden',
  isHidden: true,
  onClick: () => {
    loadComments();
  },
});

// loadMoreBtn.classList.add('is-hidden');
loadMoreBtn.hide();

loadComments()
  .then(() => {
    loadMoreBtn.show();
    showNotify('success', 'Комментарии загружены');
    // loadMoreBtn.classList.remove('is-hidden');
  })
  .catch(error => console.error(error));

// loadMoreBtn.addEventListener('click', () => {
//   loadComments().catch(error => console.error(error));
// });

function loadComments() {
  return APIService.getComments().then(data => {
    renderComments(data.comments, commentsContainer);

    if (!data.hasNextPage) {
      // loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.hide();
      showNotify('error', 'Комментарии закончились');
    }
  });
}
