export function authorization() {
  async function getUsers() {
    try {
      const response = await fetch('https://my.ampedstudio.com/login_for_studio_update', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'https://my.ampedstudio.com/login_for_studio_update',
        referrerPolicy: 'no-referrer-when-downgrade',
        mode: 'cors',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      document.cookie = `userData=${encodeURIComponent(JSON.stringify(data))}; path=/;`;
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  getUsers().then(data => {
    if (data && data.success) {
      document.body.classList.add('user-authenticated');
      document.body.classList.remove('user-notauthenticated');

      if (data.user.premium) {
        document.body.classList.add('user-premium');
        document.body.classList.remove('user-nonpremium');
      } else {
        document.body.classList.add('user-nonpremium');
        document.body.classList.remove('user-premium');
      }

      if (data.user.avatar) {
        document.querySelectorAll('.profile__avatar').forEach(el => {
          el.style.background = `url('${data.user.avatar}') no-repeat center / cover`;
        });
      }
    } else {
      document.body.classList.add('user-notauthenticated');
      document.body.classList.remove('user-authenticated');
    }
  }).catch(error => console.error('Error:', error));
}