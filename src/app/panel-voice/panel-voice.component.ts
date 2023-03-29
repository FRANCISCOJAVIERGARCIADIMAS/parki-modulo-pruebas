import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-voice',
  templateUrl: './panel-voice.component.html',
  styleUrls: ['./panel-voice.component.scss']
})
export class PanelVoiceComponent {

  ppe = 0;
  mdvpFo = 0;
  mdvpFlo = 0;
  spread1 = 0;
  title = ''
  msg = ""
  regla = ''


  pronosticar() {
    switch (true) {
      // 1 ok
      case this.ppe <= 104:
        this.regla = "ppe <= 104"
        this.title = "🟢 Hidratacion"
        this.msg = "🟢 !Tip importante!, recuerda siempre mantener una buena hidratación para ayudar a prevenir el estreñimiento y otros problemas de salud."
        break;
      // 2 ok
      case this.ppe > 104 && this.mdvpFo > 229.780:
        this.regla = "ppe > 104 && mdvpFo > 229.780"
        this.title = "🟢 Bocados pequeños"
        this.msg = "🟢 Una recomendación útil es que al comer, tomes pequeños bocados y mastiques bien antes de tragarlos, hazlo con calma esto te ayuda a disminuir el riesgo de atragantamiento."
        break;
      // 3 ok
      case this.ppe > 216 && this.mdvpFo <= 229.780:
        this.regla = "ppe > 216 && mdvpFo <= 229.780"
        this.title = "🔴 Movimientos linguales"
        this.msg = "🔴 La variación de su frecuencia de voz esta un poco alterada, le recomendamos aumentar los ejercicios de movimientos linguales."
        break;
      // 5 ok
      case this.ppe > 104 && this.mdvpFo <= 229.780 && this.mdvpFlo <= 125.970 && this.ppe <= 117:
        this.regla = "ppe > 104 && ppe <= 117 && mdvpFlo <= 125.970 && mdvpFo <= 229.780"
        this.title = "🟡 Praxias bucofaciales"
        this.msg = "🟡 Le sugerimos seguir practicando los ejercicios de movimiento de los músculos faciales para mantener una buena coordinación al hablar, ya que su frecuencia de voz es normal."
        break;
      // 4 ok
      case this.ppe > 104 && this.ppe <= 134 && this.mdvpFo <= 229.780 && this.mdvpFlo > 125:
        this.regla = "ppe > 104 && ppe <= 117 && mdvpFlo > 125.970 && mdvpFo <= 229.780"
        this.title = "🔴 Movimiento de boca"
        this.msg = "🔴 Te sugerimos hacer más ejercicios que involucren tus labios y lengua para mejorar la claridad de tu voz al hablar, ya que hemos notado que hay una leve diferencia en la forma en que modulas."
        break;
      // 6 ok
      case this.ppe > 117 && this.ppe <= 134 && this.mdvpFo <= 229.780 && this.mdvpFlo <= 125:
        this.regla = "ppe > 117 mdvpFo <= 229.780 && mdvpFlo <= 125.970 && ppe > 117"
        this.title = "🟢 Respiracion controlada"
        this.msg = "🟢 Te recomendamos seguir haciendo ejercicios de respiración controlada para mantener tu capacidad de retener el aire al hablar, ya que la variación en tu frecuencia de voz es normal."

        break;
      // 7 ok
      case this.ppe > 134 && this.ppe <= 216 && this.mdvpFo <= 229.780 && this.mdvpFlo > 125.940:
        this.regla = "ppe > 134 && ppe <= 216 && mdvpFo <= 229.780 && mdvpFlo > 125"
        this.title = '🔴 Respiracion controlada nivel 2'
        this.msg = "🔴 Su forma de hablar podría mejorar, sería bueno que realice más ejercicios para controlar su respiración al hablar."
        break;
      // 8 ok
      case this.ppe > 134 && this.ppe <= 216
        && this.mdvpFo <= 229.780 && this.mdvpFo > 206.161
        && this.mdvpFlo <= 124.940:
        this.regla = "ppe > 134 && ppe <= 216 && mdvpFo <= 229.780 && mdvpFlo > 125"
        this.title = '🟢 Vocalizaciones'
        this.msg = "🟢 Te recomendamos seguir haciendo ejercicios para mejorar tu pronunciación y vocalización, ya que esto puede ayudarte a mantener una buena comunicación con los demás."
        break;
      // 9 ok
      case this.ppe > 134 && this.ppe <= 216
        && this.mdvpFo <= 206.161 && this.mdvpFo > 117.548
        && this.mdvpFlo <= 124.940:
        this.regla = "ppe > 134 && ppe <= 216 && mdvpFo <= 229.780 && mdvpFlo > 125"
        this.title = "🔴 Dificultad para beber agua"
        this.msg = "🔴 Una idea que puede ayudarte es que si llegas a presentar temblores en manos o boca y tienes dificultad para llevarte el vaso a la boca, utilices un popote flexible."
        break;
      // 10 ok
      case
        this.ppe > 134 && this.ppe <= 216
        && this.mdvpFo > 116.218 && this.mdvpFo <= 117.548
        && this.mdvpFlo <= 124.940:
        this.regla = "ppe > 134 && ppe <= 216 && mdvpFo <= 229.780 && mdvpFlo > 125"
        this.title = "🟡 Gimnasia orofacial"
        this.msg = "🟡 Te sugerimos hacer ejercicios de gimnasia para la boca, ya que notamos que hay un pequeño cambio en tu forma de hablar. Esto te ayudará a mejorar la claridad de tus palabras."
        break;
      // 11 ok
      case
        this.ppe > 134 && this.ppe <= 216
        && this.mdvpFo <= 116.218
        && this.mdvpFlo <= 124.940
        && this.spread1 > -5.905:
        this.regla = "ppe > 134 && ppe <= 216 && mdvpFo <= 229.780 && mdvpFlo > 125"
        this.title = "🟡 Articulación al hablar"
        this.msg = "🟡 Notamos un pequeño cambio en tu voz, te recomendamos hacer ejercicios para mejorar la movilidad de la boca y tener un mejor control al hablar."
        break;
      // 12 ok
      case
        this.ppe > 134 && this.ppe <= 216
        && this.mdvpFo <= 116.218
        && this.mdvpFlo <= 124.940
        && this.spread1 <= -5.905:
        this.regla = "ppe > 134 && ppe <= 216 && mdvpFo <= 229.780 && mdvpFlo > 125"
        this.title = "🟡 Ejercicios de lectura"
        this.msg = "🟡 Le sugerimos practicar la lectura en voz alta para mejorar la claridad de su pronunciación, ya que hemos notado una leve alteración en la variación de su frecuencia de voz."
        break;

      default:
        break;
    }
  }
}
