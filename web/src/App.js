import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App(){
 
   return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlfor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlfor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlfor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
                   
            <div class="input-block">
              <label htmlfor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>  

          <button type="submit">Salvar</button>
        </form>
        </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/59968944?s=460&v=4" alt="Arthur Romansini"/>
              <div className="user-info">
                <strong>Arthur Romansini</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Web. NodeJS, ReactJS, React Native.</p>
            <a href="https://github.com/ArthurRomansini">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
   );
}

export default App;
