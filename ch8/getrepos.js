export default function () {
  let myReq = new XMLHttpRequest();

  req("https://api.github.com/users/mustafa12121");

  document.addEventListener("click", (e) => {
    if (e.target === document.querySelector("#but")) {
      document.querySelector("#pro").innerHTML = "";
      req("https://api.github.com/users/sbbahh");
    } else if (e.target === document.querySelector("#pre")) {
      document.querySelector("#pro").innerHTML = "";
      req("https://api.github.com/users/mustafa12121");
    }
  });

  function req(url) {
    myReq.open("Get", `${url}`);
    myReq.send();
    myReq.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let jsobject = JSON.parse(this.responseText);
        let avatar = document.createElement("img");
        let pro = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.src = `${jsobject.avatar_url}`;
        pro.append(avatar);
        let p = document.createElement("p");
        p.append(`${jsobject.name}`);
        pro.append(p);
        pro.append(` ${jsobject.bio}`);

        document.querySelector("#pro").appendChild(pro);
        showRepos(url);
      } else if (myReq.readyState == 4 && myReq.status == 0) {
        pro.append("no Internet conaction");
      }
    };
  }

  function showRepos(url) {
    let repoRequset = new XMLHttpRequest();
    repoRequset.open("Get", `${url}/repos`);
    repoRequset.send();
    repoRequset.onreadystatechange = function () {
      let repo = document.querySelector("#repo");
      if (repoRequset.status === 200 && repoRequset.readyState === 4) {
        let reposData = JSON.parse(repoRequset.responseText);
        repo.innerHTML = "";
        for (let i = 0; i < reposData.length; i++) {
          console.log(i);
          let repos = document.createElement("div");
          let link = document.createElement("a");
          link.href = `${reposData[i].html_url}`;
          console.log(reposData[i].html_url);
          let repoName = document.createTextNode(reposData[i].name);
          link.appendChild(repoName);
          repos.appendChild(link);
          repo.appendChild(repos);
        }
      } else if (repoRequset.readyState == 4 && repoRequset.status == 0) {
        repo.innerHTML = "";
      }
    };
  }
}
