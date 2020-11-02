async function getUser() { // when loading
    try {
        const res = await axios.get('/users');
        const users = res.data;
        const list = document.getElementById('list');
        list.innerHTML = '';

        // Repeated screen display and event association for each user
        Object.keys(users).map(function (key) {
            const userDiv = document.createElement('div');
            const span = document.createElement('span');
            span.textContent = users[key];
            const edit = document.createElement('button');
            edit.textContent = 'Modify';
            edit.addEventListener('click', async () => { // Click the Modify button
                const name = prompt('Please enter a name to replace.');
                if (!name) {
                    return alert('You must enter a name.');
                }
                try {
                    await axios.put('/user/' + key, {
                        name
                    });
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });
            const remove = document.createElement('button');
            remove.textContent = 'Delete';
            remove.addEventListener('click', async () => { // Click the Delete button
                try {
                    await axios.delete('/user/' + key);
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });
            userDiv.appendChild(span);
            userDiv.appendChild(edit);
            userDiv.appendChild(remove);
            list.appendChild(userDiv);
            console.log(res.data);
        });
    } catch (err) {
        console.error(err);
    }
}

window.onload = getUser; // call getUser
// submit button
document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    if (!name) {
        return alert('Please enter a name.');
    }
    try {
        await axios.post('/user', {
            name
        });
        getUser();
    } catch (err) {
        console.error(err);
    }
    e.target.username.value = '';
});