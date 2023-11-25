import { A } from "@solidjs/router";
import { TbBrandSolidjs } from "solid-icons/tb";

import MyComponent from './components/Props1';
import TestandoCreateSignal from './components/CreateSignal';
import Form from './components/CreateSignal2';
import Parent from './components/Props2';
import { Bookshelf } from './components/api/Main';
import TestandoCreateEffect from './components/CreateEffect';
import Effect2 from './components/CreateEffect2';
import CounterX from './components/CreateSignal3';
import GithubApiUser from './components/fetchApiSolidjs/githubApiUser';
import { HeroIcons } from './components/utils/HeroIcons';

/**
 * @function
 * @returns componentes 
 */

export default function Main() {
  return (
    <>

      <div>
        <MyComponent name="Solid props javascript" />
      </div>

      <br />

      <div>
        <TestandoCreateSignal />
      </div>

      <br />

      <div>
        <Form />
      </div>

      <br />

      <div class="props">
        <Parent />
      </div>

      <br />

      <br />

      <div class="props">
        <A href="/element">Personagens de Naruto</A>
      </div>

      <br />

      <div class="props">
        <A href="/userapi">UserApi</A>
      </div>

      <br />

      <div class="props">
        <Bookshelf name="Solid" />
      </div>

      <br />

      <div class="props">
        <TestandoCreateEffect />
      </div>

      <br />

      <div class="props">
        <Effect2 />
      </div>

      <br />

      <div class="props">
        <CounterX count='Multiplicar' />
      </div>

      <br />

      <GithubApiUser />

      <br />

      <div class="props">
        <TbBrandSolidjs size={24} color="#2c4f7c" />
      </div>

      <br />

      <div class="props">
        <HeroIcons />
      </div>

    </>

  )

}
