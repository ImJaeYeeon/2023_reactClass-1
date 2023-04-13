// //querySelectorAll('.tab-button')[0]
// $('.tab-button').eq(0).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).addClass('show');
// })
// $('.tab-button').eq(3).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(3).addClass('orange');
//     $('.tab-content').eq(3).addClass('show');
// })
// $('.tab-button').eq(4).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(4).addClass('orange');
//     $('.tab-content').eq(4).addClass('show');
// })

// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Loop through each tab button
for (let i = 0; i < tabButtons.length; i++) {
  // Add click event listener to each tab button
  tabButtons[i].addEventListener('click', function() {
    // Remove orange class from all tab buttons
    $('.tab-button').removeClass('orange');
    // Remove show class from all tab contents
    $('.tab-content').removeClass('show');
    // Add orange class to clicked tab button
    $(this).addClass('orange');
    // Add show class to corresponding tab content
    $('.tab-content').eq(i).addClass('show');
  });
}
