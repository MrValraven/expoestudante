<template>
  <Hero>
    <div class="ondeEstamos">
      <h1>Onde estamos</h1>
      <h2>Em baixo</h2>
    </div>
  </Hero>
  <section class="localization">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.375666243775!2d-7.909172784688498!3d38.5711960796222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e56f2f19aec9%3A0xc41513d0faa3463b!2sAssocia%C3%A7%C3%A3o%20Acad%C3%A9mica%20da%20Universidade%20de%20%C3%89vora!5e0!3m2!1spt-PT!2spt!4v1621876289285!5m2!1spt-PT!2spt"
      :width="frameWidth"
      :height="frameHeight"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>
  <section class="contacts">
    <div class="apoio">
      <h1>Linha de apoio</h1>
      <p><i class="fas fa-phone-alt"></i> (+351) 266 098 003</p>
      <p>
        Associação Académica da Universidade de Évora<br />Rua de Diogo Cão
        n.°21<br />7000-872 Évora, Portugal
      </p>
      <div class="chegar">
        <h1>Como<br />Chegar?</h1>
        <svg
          id="direction"
          width="150"
          height="150"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m480.971 31.029a24 24 0 0 0 -33.942 0l-191.029 191.03-191.029-191.03a24 24 0 0 0 -33.942 33.942l200.971 200.97v198.059a24 24 0 0 0 48 0v-198.059l200.971-200.97a24 24 0 0 0 0-33.942z"
            fill="#8690fa"
          />
          <g fill="#5153ff">
            <path
              d="m48 200a24 24 0 0 1 -24-24v-128a24 24 0 0 1 24-24h128a24 24 0 0 1 0 48h-104v104a24 24 0 0 1 -24 24z"
            />
            <path
              d="m464 200a24 24 0 0 1 -24-24v-104h-104a24 24 0 0 1 0-48h128a24 24 0 0 1 24 24v128a24 24 0 0 1 -24 24z"
            />
          </g>
        </svg>
      </div>
      <router-link
        to="/sobre/onde"
        class="directionsButton"
        @click="snapToElement('body')"
        ><DirectionsButton
      /></router-link>
    </div>
    <form action="https://formsubmit.co/expoestudante@aaue.pt" method="POST">
      <h1>Contacte-nos!</h1>
      <label for="nome">Nome *</label>
      <input type="text" placeholder="Nome" required v-model="nome" />
      <label for="email">Email *</label>
      <input type="email" placeholder="Email" required v-model="email" />
      <label for="telefone">Telefone *</label>
      <input type="tel" placeholder="Telefone" required v-model="telefone" />
      <label for="assunto">Assunto *</label>
      <input type="text" placeholder="Assunto" required v-model="assunto" />
      <label for="mensagem">Mensagem *</label>
      <textarea
        name="mensagem"
        id="mensagem"
        cols="30"
        rows="10"
        placeholder="Mensagem"
        required
        v-model="mensagem"
      />
      <div class="fButton">
        <BlobButton class="formButton" mensagem="Enviar" />
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlobButton from "../components/BlobButton.vue";
import DirectionsButton from "../components/DirectionsButton.vue";
import Hero from "@/components/Hero.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      frameWidth: 0,
      frameHeight: 0,
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    };
  },
  components: {
    BlobButton,
    DirectionsButton,
    Hero,
  },
  created() {
    this.frameWidth = window.innerWidth * 0.8;
    this.frameHeight = window.innerHeight * 0.5;
  },
  methods: {
    snapToElement(destination: string) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$textColor: #7179f4;
.hero {
  .ondeEstamos {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    z-index: 1;
    border: 2pxo solid red;
  }

  h1 {
    font-size: 50px;
    color: $textColor;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 23px;
    color: $textColor;
    font-weight: bold;
    margin-top: 0;
  }
}

.localization {
  max-width: 100%;
  margin-top: 12vh;
  margin-bottom: 6vh;
  display: flex;
  justify-content: center;
}

.contacts {
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;

  h1 {
    font-size: 30px;
    font-weight: 800;
    color: #0010ff;
  }

  .apoio {
    p {
      font-size: 20px;
      font-weight: 400;
      color: $textColor;
      hyphens: auto;

      .fa-phone-alt {
        color: $textColor;
        margin-right: 5px;
      }
    }

    .chegar {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        text-transform: uppercase;
        color: $textColor;
        font-size: 60px;
        font-weight: 800;
        margin-bottom: 30px;
      }
    }
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    label {
      color: #0010ff;
      font-weight: 300;
      font-style: italic;
      padding: 5px;
    }

    input,
    textarea {
      width: 25vw;
      padding: 10px;
      background-color: #9ca2fd;
      color: #ffffff;
      margin-bottom: 15px;
      border: none;
      border-radius: 12px;
      outline: none;
      resize: none;

      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ffffff;
        opacity: 0.7; /* Firefox */
        font-size: 20px;
        font-style: italic;
        font-weight: 300;
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #ffffff;
        font-size: 20px;
        font-style: italic;
        font-weight: 300;
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: re#FFFFFF;
        font-size: 20px;
        font-style: italic;
        font-weight: 300;
      }
    }

    .fButton {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 40px;
      width: 25vw;
    }

    .formButton {
      width: 250px;
      height: 75px;
      margin: 0;
    }
  }
}

@media (max-width: 1000px) {
  .contacts {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      margin-top: 50px;

      input,
      textarea {
        width: 50vw;
      }

      .fButton {
        width: 50vw;
      }
    }
  }
}

@media (max-width: 500px) {
  .hero {
    height: 100vh;

    svg {
      width: 40px;
      transform: rotate(90deg);
    }

    .ondeEstamos {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 30px 0;
      flex-direction: row;
    }

    h1 {
      font-size: 30px;
      margin: 0;
      margin-right: 10px;
    }
  }

  .contacts {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .apoio {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        padding: 0 50px 0 50px;
        /* hyphens: auto; */
      }

      .chegar {
        h1 {
          font-size: 30px;
        }

        svg {
          width: 100px;
        }
      }
    }

    form {
      margin-top: 50px;

      input,
      textarea {
        width: 70vw;
      }

      .fButton {
        width: 70vw;
      }
    }
  }
}
</style>
