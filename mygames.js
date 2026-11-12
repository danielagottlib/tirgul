/* personal games, built for specific patients.
   Daniela ticks in the therapist screen which patient sees each game (saved in assign.js).
   kind: how the game plays.
   farm = a farm scene (farm.js, Gemini art): each time the child says the sentence, one more piece of the current
          animal's house flies from the pile of materials (reps times per animal, rounds animals per game);
          at the end a little girl comes and cheers.
          words: two open syllables (פָּרָה), one closed syllable (סוּס) or a closed last syllable (נָמֵר).
   plane = an airplane (rbox.js, Gemini art): the child taps an item and says "<word> <tail>" reps times; the item
          flies into a window; when all windows are full the plane takes off (rounds items per game, max 5 windows).
   mbox = a magic box (rbox.js, Gemini art): the child taps an item, says the word (reps times) and the item flies
          into the box; when all items are in, the box bursts open. */
window.MY_GAMES=[
 {id:'house-l',icon:'🏠',name:'בונים בית ל...',sub:'משפט עם ל',kind:'farm',
  frame:'אני בונה בית ל..',reps:5,rounds:4,
  items:[['פרה','cow'],['סוס','horse'],['נמר','tiger'],['פיל','elephant'],['גמל','camel'],['כלב','dog']]},
 {id:'mbox-ri',icon:'✈️',name:'טסים באווירון',sub:'רִ (ר עם חיריק) + באווירון',kind:'plane',reps:2,rounds:5,tail:'בָּאֲוִירוֹן',
  items:[['רִימוֹן','pomegranate'],['רִיבָּה','jam'],['רִיבּוּעַ','square'],['רִצְפָּה','tile'],['רִיקִי','bunny'],['רִיבִי','teddy'],['רִיצְ׳רְץ׳','zipper'],['רִיטָה','kitten'],['רִינִי','penguin']]}
];
