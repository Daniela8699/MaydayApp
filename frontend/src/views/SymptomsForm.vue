<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 bg-gradient-info shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="img/sick.jpg" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4">
                    <router-link to="/editProfile" style="color:#FFFFFF">Editar Información</router-link>
                  </base-button>
                  <base-button type="default" size="sm" class="float-right">Mensajes</base-button>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1"></div>
            </div>
            <div class="text-center mt-5">
              <h3>
               Síntomas COVID-19
              </h3>

               <span class="font-weight-light">Por favor, responda todas las preguntas para una mejor </span>
              <div class="h6 font-weight-300">
                <i class="ni location_pin mr-2"></i>
                {{phone}}
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>
                Tipo documento: {{documentType}}
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>
                Número de documento: {{documentNumber}}
              </div>
              <div>
                <i class="ni education_hat mr-2"></i>
                Descripción:
                {{description}}
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>Información del usuario.</p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>