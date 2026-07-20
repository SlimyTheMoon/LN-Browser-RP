/*  EX-Browser-RP  –  main.js  (vanilla, no jQuery) */

(function () {
	'use strict';

	/* ---- Toggle sections ---- */
	document.getElementById('cb_post').addEventListener('change', function () {
		document.getElementById('hiddenDiv1').style.display = this.checked ? '' : 'none';
	});
	document.getElementById('cb_attach').addEventListener('change', function () {
		document.getElementById('hiddenDiv2').style.display = this.checked ? '' : 'none';
	});

	/* ---- Form -> live BBCode update ---- */
	var form = document.getElementById('form1');
	if (form) {
		form.addEventListener('input', function () { updateBBCodeView(); });
		form.addEventListener('reset', function () {
			setTimeout(function () {
				if (window.isRawTemplate) renderRawTemplate();
				else updateBBCodeView();
			}, 10);
		});
	}

	/* ---- Copy button ---- */
	var copyBtn = document.getElementById('btnCopyBBCode');
	if (copyBtn) {
		copyBtn.addEventListener('click', doCopy);
	}

	function doCopy() {
		var ta = document.getElementById('generatedBBCode');
		if (!ta) return;
		ta.select();
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(ta.value);
		} else {
			document.execCommand('copy');
		}
		flashButton(copyBtn, 'Copied!');
	}

	function flashButton(btn, msg) {
		var orig = btn.innerHTML;
		btn.innerHTML = '<i class="fas fa-check"></i> ' + msg;
		setTimeout(function () { btn.innerHTML = orig; }, 1200);
	}

	/* ---- Random encryption ---- */
	var encBtn = document.getElementById('btnRandomEncryption');
	if (encBtn) {
		encBtn.addEventListener('click', function () {
			var field = document.getElementById('encryption');
			if (!field) return;
			field.value = generateRandomEncryption();
			updateBBCodeView();
		});
	}

	/* ---- Preview modal ---- */
	var modal = document.getElementById('bbcode-modal');
	var btnPreview = document.getElementById('btnPreviewBBCode');
	var btnCloseX = document.getElementById('btnCloseModal');
	var btnCloseBot = document.getElementById('btnModalClose');
	var btnModalCopy = document.getElementById('btnModalCopy');

	function openModal() {
		updateBBCodeView();
		var dateEl = document.getElementById('mybb-post-date');
		if (dateEl) {
			var now = new Date();
			dateEl.textContent = now.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) + ' ' + now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
		}
		modal.style.display = '';
		document.body.style.overflow = 'hidden';
	}
	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	if (btnPreview) btnPreview.addEventListener('click', openModal);
	if (btnCloseX) btnCloseX.addEventListener('click', closeModal);
	if (btnCloseBot) btnCloseBot.addEventListener('click', closeModal);
	if (modal) {
		modal.addEventListener('click', function (e) {
			if (e.target === modal) closeModal();
		});
	}
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && modal && modal.style.display !== 'none') closeModal();
	});

	if (btnModalCopy) {
		btnModalCopy.addEventListener('click', function () {
			var ta = document.getElementById('generatedBBCode');
			if (!ta) return;
			ta.select();
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(ta.value);
			} else {
				document.execCommand('copy');
			}
			flashButton(btnModalCopy, 'Copied!');
		});
	}

	/* ---- Init templates & first render ---- */
	initTemplateChooser();
	updateBBCodeView();

})();