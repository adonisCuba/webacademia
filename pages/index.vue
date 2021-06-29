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
      <v-img src="logo_white.png" class="d-flex justify-center" width="80" height="80" aspect-ratio="1"></v-img>
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
  </v-container>
</template>
