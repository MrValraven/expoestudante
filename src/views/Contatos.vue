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
  <section class="contacts" v-if="!sendingEmail">
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
    <form>
      <h1>Contacte-nos!</h1>
      <label for="name">Nome *</label>
      <input type="text" placeholder="Nome" required v-model="name" />
      <label for="email">Email *</label>
      <input type="email" placeholder="Email" required v-model="email" />
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
        <BlobButton
          class="formButton"
          mensagem="Enviar"
          @click="sendFormData"
        />
      </div>
    </form>
  </section>
  <section class="modalSection" v-else>
    <div class="modal">
      <img
        v-if="!emailSent && !emailFailed"
        src="@/assets/spinning-circle.gif"
        alt=""
      />
      <div v-else-if="emailSent" class="sucess">
        <h1>Mensagem enviada</h1>
        <i class="far fa-check-circle sucessIcon"></i>
        <BlobButton
          class="modalButton"
          mensagem="Voltar"
          @click="resetEmailSendingValues"
        />
      </div>
      <div v-else-if="emailFailed" class="failure">
        <h1>Ocorreu um erro</h1>
        <i class="fas fa-exclamation-circle errorIcon"></i>
        <p>
          Por favor volte a tentar mais tarde ou envie uma mensagem para
          expoestudante@aaue.pt
        </p>
        <BlobButton
          class="modalButton"
          mensagem="Voltar"
          @click="resetEmailSendingValues"
        />
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { ref, watch } from "vue";
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
      name: "",
      email: "",
      assunto: "",
      mensagem: "",
      emailSent: false,
      emailFailed: false,
      sendingEmail: false,
      isFormFilled: false,
    };
  },
  setup() {
    let name = ref("");
    let email = ref("");
    let assunto = ref("");
    let mensagem = ref("");
    let isFormFilled = ref(false);
    watch([name, email, assunto, mensagem], () => {
      if (name.value && email.value.includes('@') && assunto.value && mensagem.value) {
        isFormFilled.value = true;
      } else {
        isFormFilled.value = false;
      }
    });

    return {
      isFormFilled: isFormFilled,
      name: name,
      email: email,
      assunto: assunto,
      mensagem: mensagem,
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
    snapToElement(destination) {
      const element = document.querySelector(destination);
      if (element) {
        element.scrollIntoView();
      }
    },
    async sendFormData() {
      if (!this.isFormFilled) {
        return;
      }

      this.sendingEmail = true;
      const formData = {
        sendTo: "informativa@aaue.pt",
        subject: this.assunto,
        message: {
          origem: "ExpoEstudante",
          name: this.name,
          email: this.email,
          text: this.mensagem,
        },
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      await fetch(
        "https://blogposting-api.herokuapp.com/api/sendEmail",
        requestOptions
      )
        .then(async (data) => {
          if (data.ok) {
            this.emailSent = true;
            this.clearFormInfo();
          }
        })
        .catch((error) => {
          this.emailFailed = true;
          console.log(error.message);
        });
    },
    clearFormInfo() {
      this.name = "";
      this.email = "";
      this.assunto = "";
      this.mensagem = "";
    },
    resetEmailSendingValues() {
      this.sendingEmail = false;
      this.emailSent = false;
      this.emailFailed = false;
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

.modalSection {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}

.modal {
  width: 500px;
  min-height: 300px;
  padding: 0px 50px 50px 50px;
  border-radius: 25px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 100px;
    height: 100px;
  }
  .sucess,
  .failure {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0;
    }

    .errorIcon {
      margin: 20px 0 0 0;
      font-size: 100px;
      color: #992c2c;
    }
    .sucessIcon {
      margin: 35px 0;
      font-size: 100px;
      color: #4bb543;
    }
    p {
      margin: 20px 0;
    }

    .modalButton {
      position: absolute;
      bottom: -200px;
      cursor: pointer;
    }
  }
}

@media (max-width: 1300px) {
  .ondeEstamos {
    margin-bottom: 50px;
  }
  .localization {
    margin-top: 0;
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

@media (max-width: 850px) {
  .ondeEstamos {
    margin-bottom: -50px;
  }

  .localization {
    margin-top: 50px;
  }
}

@media (max-width: 500px) {
  .hero {
    height: 100vh;

    .ondeEstamos {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0px 0 20px 30px;
      flex-direction: column;
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
        padding: 0 50px 0 80px;
        hyphens: auto;
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

@media (max-width: 370px) {
  .hero .ondeEstamos {
    margin-bottom: -10px;
  }
}
</style>
