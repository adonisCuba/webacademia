<template>
  <v-container fluid>      
    <v-parallax src="sunset-over-the-sea-on-beach.jpg" class="rounded-sm">
      <v-row align="center">
        <v-col cols="12" class="d-flex justify-center">
          <v-btn color="primary" x-large>
            <v-icon left>mdi-account-check</v-icon>
              Entrar
            </v-btn>
        </v-col>
      </v-row>
      <v-row          
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h2 class="mb-4">
            Bienvenidos a la academia
          </h2>
          <h1>
            Sistema Cancio LaO
          </h1>
          <p class="subtitle-1">ES HORA DE SER CONSCIENTES DE NUESTRO POTENCIAL</p>
        </v-col>
      </v-row>
    </v-parallax>
    <v-card class="mx-auto mt-2" outlined color="primary">
      <v-img src="logo_white.png" width="80" height="80" aspect-ratio="1"  class="mt-3 center_el"></v-img>
      <v-list-item three-line>        
        <v-list-item-content>          
          <v-list-item-title class="text-h5 mb-1 text-center white--text">
            Somos Expertos
          </v-list-item-title>
          <v-list-item-title class="text-h5 mb-1 text-center white--text">
            Mentores de Empresarios
          </v-list-item-title>
          <div class="text-overline text-center mb-4 white--text">
            El Sistema Cancio Lao es un sistema de TRANSFORMACIÓN PERSONAL y EMPRESARIAL exclusivo para l@s 
            emprendedores y empresarios.
          </div>
          <v-list-item-subtitle class="text-center white--text">¿Estás cansad@ de trabajar intensamente y no tienes los resultados que quieres?</v-list-item-subtitle>
          <v-list-item-subtitle class="text-center white--text">¿Tienes problemas con tu familia porque no tienes tiempo?</v-list-item-subtitle>
          <v-list-item-subtitle class="text-center white--text">¿Te sientes estresad@ la mayor parte del dia?</v-list-item-subtitle>
          <v-list-item-subtitle class="text-center white--text">¡Nosotros podemos ayudarte!</v-list-item-subtitle>
        </v-list-item-content>        
      </v-list-item>
    </v-card>
    <h1 class="text-center pa-4 blue--text">Nuestros cursos y servicios</h1>
    <v-row>
      <v-col class="col-12 col-md-3 col-xs-12">
        <v-card class="blue">
          <v-img src="N1.png"></v-img>
          <v-card-text class="text-h6 text-center  white--text">
            Curso Toma de Conciencia N1
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-3 col-xs-12">
        <v-card class="blue">
          <v-img src="SOPORTE.png"></v-img>
          <v-card-text class="text-h6 text-center white--text">
            Soporte con la comunidad
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-3 col-xs-12">
        <v-card class="blue">
          <v-img src="mentoria.png"></v-img>
          <v-card-text class="text-h6 text-center white--text">
            Mentoría Creando mi Realidad
          </v-card-text>
        </v-card>        
      </v-col>
      <v-col class="col-12 col-md-3 col-xs-12">
        <v-card>
          <v-img src="Cancio-Lao-1.png" aspect-ratio="1"></v-img>
          <v-card-text class="blue text-h6 text-center white--text">
            Mentorías Privadas
          </v-card-text>
        </v-card>        
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 col-md-4 col-xs-12">
        <v-card>
          <v-card-title class="d-flex justify-center">Mentoría Grupal</v-card-title>
          <v-card-text>
            <p class="text-center pa-8 blue--text font-weight-bold" style="font-size: 5em"><sup>€</sup>2497</p>
            <v-list>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                6 meses con directos cada semana de 2 horas
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                Videos exclusivos
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                Material exclusivo
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                Acceso a la comunidad de Whatsapp y Telegram
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-plus</v-icon>
                BONO EXTRA: Una sesión personalizada a cada uno
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="d-flex justify-center"><v-btn color="primary">Lo Quiero</v-btn></v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-4 col-xs-12">
        <v-card>
          <v-card-title class="d-flex justify-center">Tema de Conciencia Nivel 1</v-card-title>
          <v-card-text>
            <p class="text-center pa-8 blue--text font-weight-bold" style="font-size: 5em"><sup>€</sup>597</p>
            <v-list>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                + de 20 vídeos de contenido
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                4 Sesiones grupales para resolver dudas en directo con Jose Luis Cancio LaO
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                Acceso al grupo de Whatsapp
              </v-list-item>
              <v-list-item>
                <v-icon color="blue">mdi-check</v-icon>
                Acceso al grupo de Telegram
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="d-flex justify-center"><v-btn color="primary">Lo Quiero</v-btn></v-card-actions>
        </v-card>
      </v-col>      
      <v-col class="col-12 col-md-4 col-xs-12">
        <v-card>
          <v-card-title class="d-flex justify-center">Soporte Mensual</v-card-title>
          <v-card-text>
            <div class="text-center pa-8 blue--text font-weight-bold" style="font-size: 5em"><sup>€</sup>247</div>
            <div class="title text-center">1 mes</div>
            <v-list>
              <v-list-item>
                <v-icon color="blue">mdi-plus</v-icon>
                Sigue en el Grupo de Zoom + Telegram +WhatsApp
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="d-flex justify-center"><v-btn color="primary">Lo Quiero</v-btn></v-card-actions>
        </v-card>
      </v-col>      
    </v-row>
    <v-card class="mt-3 pa-2">
      <v-row>      
        <v-col class="col-12 col-md-3 ma-8 col-xs-12">
          <div class="title blue--text">Contáctenos en</div>
          <div><v-icon color="blue">mdi-whatsapp</v-icon> WhatsApp</div>
          <div><v-icon color="blue">mdi-email</v-icon> info@sistemacanciolao.com</div>
          <div><v-icon color="blue">mdi-instagram</v-icon> @SistemaCancioLaO</div>
          <div><v-icon color="blue">mdi-facebook</v-icon> Sistema Cancio LaO</div>
          <div><v-icon color="blue">mdi-youtube</v-icon> Sistema Cancio LaO</div>
        </v-col> 
        <v-col class="col-12 col-md-8 col-xs-12">
          <v-form>
            <v-text-field label="Nombre"></v-text-field>
            <v-text-field label="Correo electrónico"></v-text-field>
            <v-textarea label="Mensaje"></v-textarea>
            <v-btn color="primary">Enviar</v-btn>
          </v-form>          
        </v-col>           
      </v-row>
    </v-card>
    
  </v-container>
</template>
<style>
  .center_el{
    margin: auto; 
    padding: 10px;
  }
</style>
