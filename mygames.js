/* personal games, built for specific patients.
   Daniela ticks in the therapist screen which patient sees each game (saved in assign.js).
   kind: how the game plays.
   farm = a farm scene (farm.js, Gemini art): each time the child says the sentence, one more piece of the current
          animal's house flies from the pile of materials (reps times per animal, rounds animals per game);
          at the end a little girl comes and cheers.
   words: two open syllables (פָּרָה), one closed syllable (סוּס) or a closed last syllable (נָמֵר). */
window.MY_GAMES=[
 {id:'house-l',icon:'🏠',name:'בונים בית ל...',sub:'משפט עם ל',kind:'farm',
  frame:'אני בונה בית ל..',reps:5,rounds:4,
  items:[['פרה','cow'],['סוס','horse'],['נמר','tiger'],['פיל','elephant'],['גמל','camel'],['כלב','dog']]}
];
