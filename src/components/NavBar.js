import React, { Component } from 'react'

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">News Aggregator</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">General</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/business">Business</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/health">Health</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/sports">Sports</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar