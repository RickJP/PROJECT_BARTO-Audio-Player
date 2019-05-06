let canPlay = true;

let audio = document.getElementById('player');
let wrapper = document.getElementById('wrapper');

// audio.addEventListener('ended', () => {
// 	$.post('song.php', function(result) {
// 		audio.src = result;
// 		audio.load(); //suspends and restores all audio element
// 		audio.play();
// 	});
// });

// function showPlayer() {
// 	let thePlayer = document.createElement('div');

// 	//document.getElementByTagName('div').setAttribute('id', 'wrapper');
// 	thePlayer.innerHTML = `
// 				<div id="wrapper">
// 					<audio id="player" controls preload="metadata" controls style=" width:300px;">
// 					<source src="songs.php" type="audio/mpeg">
// 					Your browser does not support the audio element.
// 					</audio>
// 				</div>
// 	`;
// 	//thePlayer.setAttribute('id', 'wrapper');
// 	let ref = document.getElementById('playerLocation');

// 	ref.insertAdjacentHTML('afterend', thePlayer.innerHTML);
// 	//document.body.appendChild(div);

// 	audio.removeEventListener('ended', () => {});
// }

function hideAndShowPlayer() {
	// wrapper = document.getElementById('wrapper');
	// wrapper.parentNode.removeChild(wrapper);
	document.getElementById('wrapper').style.display = 'none';

	console.log('Show Player');
	setTimeout(() => {
		document.getElementById('wrapper').style.display = 'block';
	}, 2000);
}

let duration,
	currentTime = -1;

audio.addEventListener('canplaythrough', () => {
	duration = Math.floor(audio.duration);
});

function isFinished() {
	console.log('Finished Playing');
	hideAndShowPlayer();
}

audio.addEventListener(
	'timeupdate',
	(event) => {
		currentTime = Math.floor(audio.currentTime);
		currentTime >= duration ? isFinished() : null;
		console.log(currentTime);
	},
	false
);
