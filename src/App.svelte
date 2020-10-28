<script>
  import { Router, Route } from 'svelte-routing';
  import NavLink from './component/NavLink.svelte';
  import Home from './route/Home.svelte';
  import About from './route/About.svelte';
  import Blog from './route/Blog.svelte';

  // Used for SSR. A falsy value is ignored by the Router.
  export let url = '';
</script>

<style global>
  @import './asset/global.css';
</style>

<Router {url}>
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
    <NavLink to="blog">Blog</NavLink>
  </nav>
  <div>
    <Route path="about" component={About} />
    <Route path="blog/*" component={Blog} />
    <Route path="/" component={Home} />
  </div>
</Router>
