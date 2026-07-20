function select_all()
{		
	var text_val = document.getElementById('output');
	text_val.focus();
text_val.select();
document.execCommand("Copy");
}

function resetForm() {
document.getElementById("form1").reset();
}

function getval(sel)
{
	if (sel.value == 0) 
	// Clear template
		{
		document.form1.commid.value = "";
		document.form1.position.value = "";
		document.form1.charposition.value = "";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 1) 
	// Template One
	{
		document.form1.commid.value = "Sophia Cleveland";
		document.form1.position.value = "Fleet Admiral";
		document.form1.charposition.value = "Fleet Admiral";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}	

	if (sel.value == 2) 
	// Template Two
	{
		document.form1.commid.value = "Katelyn Simmons";
		document.form1.position.value = "Admiral";
		document.form1.charposition.value = "Admiral";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 3) 
	// Template Three
	{
		document.form1.commid.value = "Jack Boehm";
		document.form1.position.value = "Admiral";
		document.form1.charposition.value = "Admiral";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 4) 
	// Template Four
	{
		document.form1.commid.value = "Mayling Shen";
		document.form1.position.value = "Admiral";
		document.form1.charposition.value = "Admiral";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 5) 
	// Template Five
	{
		document.form1.commid.value = "Amelia Hale";
		document.form1.position.value = "Commodore";
		document.form1.charposition.value = "Commodore";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	
	if (sel.value == 6) 
	// Template Six
	{
		document.form1.commid.value = "Jeremy Hunter";
		document.form1.position.value = "Captain";
		document.form1.charposition.value = "Captain";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 7) 
	// Template Seven
	{
		document.form1.commid.value = "Ryan Hill";
		document.form1.position.value = "Commander";
		document.form1.charposition.value = "Commander";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 8) 
	// Template Eight
	{
		document.form1.commid.value = "Claire Valenzuela";
		document.form1.position.value = "Lieutenant Commander";
		document.form1.charposition.value = "Lieutenant Commander";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 9) 
	// Template Nine
	{
		document.form1.commid.value = "Daniel White";
		document.form1.position.value = "Lieutenant Commander";
		document.form1.charposition.value = "Lieutenant Commander";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 10) 
	// Template Ten
	{
		document.form1.commid.value = "Chris \"Otter\" Richmond";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 11) 
	// Template Eleven
	{
		document.form1.commid.value = "Donbastio Whitaker";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 12) 
	// Template Twelve
	{
		document.form1.commid.value = "Scott L. Bradly";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 13) 
	// Template Thirteen
	{
		document.form1.commid.value = "Sebastian  Weaver";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 14) 
	// Template Fourteen
	{
		document.form1.commid.value = "Eric Agathon";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 15) 
	// Template Fifteen
	{
		document.form1.commid.value = "Jack Kelso";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 16) 
	// Template Sixteen
	{
		document.form1.commid.value = "Matthew Austin";
		document.form1.position.value = "Lieutenant";
		document.form1.charposition.value = "Lieutenant";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 90) 
	// Template ninety
	{
		document.form1.commid.value = "";
		document.form1.position.value = "";
		document.form1.charposition.value = "";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 91) 
	// Template ninety-one
	{
		document.form1.commid.value = "";
		document.form1.position.value = "";
		document.form1.charposition.value = "";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 92) 
	// Template ninety-two
	{
		document.form1.commid.value = "";
		document.form1.position.value = "";
		document.form1.charposition.value = "";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}

	if (sel.value == 93) 
	// Template ninety-three
	{
		document.form1.commid.value = "";
		document.form1.position.value = "";
		document.form1.charposition.value = "";
		// document.form1.recipient.value = "";
		// document.form1.ccrecipient.value = "";
		// document.form1.bccrecipient.value = "";
		// document.form1.subject.value = "";
		document.form1.message.value = "";
		document.form1.titleattach.value = "";
		document.form1.attachment.value = "";
		document.form1.headerimg.value = "";
		document.form1.footerimg.value = "";
	}
	updateBBCodeView();
}

function escapeHTML(text) {
	return text.replace(/[&<>\"]+/g, function(match) {
		return {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;'
		}[match];
	});
}

function renderBBCode(raw) {
	var html = escapeHTML(raw);

	// --- Horizontal rule with colour [hrc]#color[/hrc] ---
	html = html.replace(/\[hrc\](.*?)\[\/hrc\]/gi, function(_, c) {
		var color = c.trim() || '#555';
		return '<hr class="mybb-hr" style="border-color:' + color + ';">';
	});

	// --- [br] standalone line-break tag ---
	html = html.replace(/\[br\]/gi, '<br>');

	// --- Text formatting ---
	html = html.replace(/\[b\](.*?)\[\/b\]/gsi, '<strong>$1</strong>');
	html = html.replace(/\[i\](.*?)\[\/i\]/gsi, '<em>$1</em>');
	html = html.replace(/\[u\](.*?)\[\/u\]/gsi, '<u>$1</u>');
	html = html.replace(/\[s\](.*?)\[\/s\]/gsi, '<s>$1</s>');

	// --- Colour ---
	html = html.replace(/\[color=([^\]]+)\](.*?)\[\/color\]/gsi, '<span style="color:$1">$2</span>');

	// --- Font ---
	html = html.replace(/\[font=([^\]]+)\](.*?)\[\/font\]/gsi, '<span style="font-family:$1">$2</span>');

	// --- Size (named: xx-small … xx-large  OR numeric 1-7) ---
	html = html.replace(/\[size=([^\]]+)\](.*?)\[\/size\]/gsi, function(_, sz, inner) {
		var sizeMap = {'1':'xx-small','2':'x-small','3':'small','4':'medium','5':'large','6':'x-large','7':'xx-large'};
		var css = sizeMap[sz] || sz;
		return '<span style="font-size:' + css + '">' + inner + '</span>';
	});

	// --- Alignment ---
	html = html.replace(/\[align=([^\]]+)\](.*?)\[\/align\]/gsi, '<div style="text-align:$1">$2</div>');

	// --- Indent / [pi amount=N] ---
	html = html.replace(/\[indent\](.*?)\[\/indent\]/gsi, '<div style="padding-left:2em">$1</div>');
	html = html.replace(/\[pi\s+amount=([^\]]+)\](.*?)\[\/pi\]/gsi, function(_, amt, inner) {
		var px = parseInt(amt, 10) * 4 || 20;
		return '<div style="padding-left:' + px + 'px">' + inner + '</div>';
	});

	// --- Images ---
	// [img float=left/right]url[/img]
	html = html.replace(/\[img\s+float=(left|right)\](.*?)\[\/img\]/gsi, function(_, fl, url) {
		return '<img src="' + url.trim() + '" class="mybb-img" style="float:' + fl + '; margin:0 ' + (fl==='left'?'10px 10px 0':'0 10px 10px') + '; max-width:200px;">';
	});
	// [img=WxH]url[/img]
	html = html.replace(/\[img=([0-9]+)x([0-9]+)\](.*?)\[\/img\]/gsi, function(_, w, h, url) {
		return '<img src="' + url.trim() + '" class="mybb-img" width="' + w + '" height="' + h + '" style="max-width:100%;height:auto;">';
	});
	// [img]url[/img]  (plain)
	html = html.replace(/\[img\](.*?)\[\/img\]/gsi, '<img src="$1" class="mybb-img">');

	// --- URL ---
	html = html.replace(/\[url=([^\]]+)\](.*?)\[\/url\]/gsi, '<a href="$1" target="_blank" rel="noreferrer noopener" class="mybb-link">$2</a>');
	html = html.replace(/\[url\](.*?)\[\/url\]/gsi, '<a href="$1" target="_blank" rel="noreferrer noopener" class="mybb-link">$1</a>');

	// --- Quote ---
	html = html.replace(/\[quote=([^\]]+)\](.*?)\[\/quote\]/gsi, '<div class="mybb-quote"><div class="mybb-quote-author">$1 wrote:</div><div class="mybb-quote-body">$2</div></div>');
	html = html.replace(/\[quote\](.*?)\[\/quote\]/gsi, '<div class="mybb-quote"><div class="mybb-quote-author">Quote:</div><div class="mybb-quote-body">$1</div></div>');

	// --- Code ---
	html = html.replace(/\[code\](.*?)\[\/code\]/gsi, '<div class="mybb-code"><div class="mybb-code-header">Code:</div><pre class="mybb-code-body">$1</pre></div>');

	// --- Table ---
	html = html.replace(/\[table\](.*?)\[\/table\]/gsi, '<table class="mybb-table">$1</table>');
	html = html.replace(/\[tr\](.*?)\[\/tr\]/gsi, '<tr>$1</tr>');
	html = html.replace(/\[td\](.*?)\[\/td\]/gsi, '<td>$1</td>');
	html = html.replace(/\[th\](.*?)\[\/th\]/gsi, '<th>$1</th>');

	// --- List ---
	html = html.replace(/\[list\](.*?)\[\/list\]/gsi, '<ul class="mybb-list">$1</ul>');
	html = html.replace(/\[list=1\](.*?)\[\/list\]/gsi, '<ol class="mybb-list">$1</ol>');
	html = html.replace(/\[\*\]/gi, '<li>');

	// --- Spoiler ---
	html = html.replace(/\[spoiler\](.*?)\[\/spoiler\]/gsi, '<details class="mybb-spoiler"><summary>Spoiler (click to show)</summary><div class="mybb-spoiler-body">$1</div></details>');
	html = html.replace(/\[spoiler=([^\]]+)\](.*?)\[\/spoiler\]/gsi, '<details class="mybb-spoiler"><summary>$1 (click to show)</summary><div class="mybb-spoiler-body">$2</div></details>');

	// --- Strip unknown [tags] that remain (keep content) ---
	// Don't strip - some templates use RHW/custom tags that are just display text

	// --- Newlines to <br> (last step) ---
	html = html.replace(/\r\n|\r|\n/g, '<br>');

	// --- Clean up excessive <br> around block elements ---
	html = html.replace(/(<\/?(?:div|table|tr|td|th|hr|ul|ol|li|details|pre)[^>]*>)\s*<br>/gi, '$1');
	html = html.replace(/<br>\s*(<\/?(?:div|table|tr|td|th|hr|ul|ol|li|details|pre)[^>]*>)/gi, '$1');

	return html;
}

function buildBBCode() {
	var form = document.form1;
	var parts = [];

	if (form.headerimg.value.trim()) {
		parts.push('[img]' + form.headerimg.value.trim() + '[/img]');
	}

	if (form.commid.value.trim()) {
		parts.push('[b]' + form.commid.value.trim() + '[/b]');
	}

	if (form.position.value.trim()) {
		parts.push('[i]' + form.position.value.trim() + '[/i]');
	}

	if (form.recipient && form.recipient.value.trim()) {
		parts.push('[b]To:[/b] ' + form.recipient.value.trim());
	}
	if (form.ccrecipient && form.ccrecipient.value.trim()) {
		parts.push('[b]CC:[/b] ' + form.ccrecipient.value.trim());
	}
	if (form.bccrecipient && form.bccrecipient.value.trim()) {
		parts.push('[b]BCC:[/b] ' + form.bccrecipient.value.trim());
	}
	if (form.subject && form.subject.value.trim()) {
		parts.push('[b]Subject:[/b] ' + form.subject.value.trim());
	}
	if (form.encryption && form.encryption.value.trim()) {
		parts.push('[b]Encryption:[/b] ' + form.encryption.value.trim());
	}
	if (form.charposition && form.charposition.value.trim()) {
		parts.push('[b]Character Position:[/b] ' + form.charposition.value.trim());
	}
	if (form.ishiring && form.ishiring.checked) {
		parts.push('[b][color=gold][LN] is recruiting![/color][/b]');
	}
	

	if (form.message.value.trim()) {
		var message = form.message.value.trim().replace(/\n\n/g, '\n\n');
		parts.push(message);
	}

	if (form.titleattach.value.trim() || form.attachment.value.trim()) {
		var att = '';
		if (form.titleattach.value.trim()) {
			att += '[b]' + form.titleattach.value.trim() + '[/b]\n';
		}
		if (form.attachment.value.trim()) {
			att += form.attachment.value.trim();
		}
		if (att) {
			parts.push('[quote]' + att + '[/quote]');
		}
	}

	if (form.footerimg.value.trim()) {
		parts.push('[img]' + form.footerimg.value.trim() + '[/img]');
	}

	if (form.ishiring && form.ishiring.checked) {
		parts.push('[b][color=gold][LN] is recruiting![/color][/b]');
	}

	return parts.join('\n\n');
}

function updateBBCodeView() {
	if (window.isRawTemplate) {
		renderRawTemplate();
		return;
	}
	var bbcode = buildBBCode();
	var output = document.getElementById('generatedBBCode');
	var rendered = document.getElementById('renderedBBCode');
	if (output) output.value = bbcode;
	if (rendered) rendered.innerHTML = renderBBCode(bbcode);
}

function parseTemplates(markdown) {
	var templates = [];

	if (markdown.trim().indexOf('---') === -1) {
		// No YAML-style sections; treat entire file as a raw template.
		return [{
			name: 'Default Ex Template',
			raw: markdown.trim()
		}];
	}

	var lines = markdown.split(/\r?\n/);
	var current = null;
	var inBlock = false;
	var multiKey = null;
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if (line.trim() === '---') {
			if (inBlock && current) {
				templates.push(current);
			}
			current = {};
			inBlock = true;
			multiKey = null;
			continue;
		}
		if (!inBlock) continue;
		if (multiKey) {
			if (/^\s{2,}|^\t/.test(line)) {
				current[multiKey] += line.replace(/^\s{2,}|^\t/, '') + '\n';
				continue;
			}
			multiKey = null;
		}
		var m = line.match(/^([a-z0-9\-]+)\s*:\s*(.*)$/i);
		if (!m) continue;
		var key = m[1].trim();
		var value = m[2];
		if (value === '|') {
			current[key] = '';
			multiKey = key;
			continue;
		}
		current[key] = value;
	}
	if (inBlock && current) templates.push(current);
	return templates;
}

function applyTemplateValues(template) {
	if (!template) return;
	var output = document.getElementById('generatedBBCode');
	var rendered = document.getElementById('renderedBBCode');
	if (template.raw !== undefined) {
		window.isRawTemplate = true;
		window.currentRawTemplate = template.raw;
		renderRawTemplate();
		return;
	}
	window.isRawTemplate = false;
	window.currentRawTemplate = null;
	var form = document.form1;
	form.headerimg.value = template['header-image'] || template['headerimg'] || '';
	form.footerimg.value = template['footer-image'] || template['footerimg'] || '';
	form.commid.value = template.name || template['commid'] || '';
	form.position.value = template.position || '';
	form.recipient.value = template.recipient || '';
	form.ccrecipient.value = template['cc-recipient'] || template['ccrecipient'] || '';
	form.bccrecipient.value = template['bcc-recipient'] || template['bccrecipient'] || '';
	form.subject.value = template.subject || '';
	form.message.value = (template.message || '').trim();
	form.titleattach.value = template['attachment-title'] || template.titleattach || '';
	form.attachment.value = (template.attachment || '').trim();
	form.encryption.value = template.encryption || template['encryption'] || '';
	form.charposition.value = template.charposition || template['charposition'] || '';
	if (template['is-hiring'] !== undefined) {
		form.ishiring.checked = (template['is-hiring'] + '').toLowerCase() === 'true';
	}
	updateBBCodeView();
}

function toRgYear(date) {
	// 2026 maps to 836 as requested (2026 - 1190 = 836)
	return date.getFullYear() - 1190;
}

function formatDDMMYYYY(date) {
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0');
	var year = toRgYear(date);
	var compiledRPyear = dd + '/' + mm + '/' + year
	return compiledRPyear;
}

function generateRandomEncryption(style) {
	if (!style) {
		var sel = document.getElementById('encryptionStyle');
		style = sel ? sel.value : 'ex';
	}

	if (style === 'ex') {
		// EX style: GreekLetter-EX-SystemName-Number
		var greekLetters = [
			'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel',
    		'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa',
    		'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey',
    		'X-ray', 'Yankee', 'Zulu'
		];
		var systemNames = [
			'PuertoRico', 'Virginia', 'Kansas', 'California', 'Pennsylvania', 'Texas',
			'Minnesota', 'Quebec', 'NewHampshire', 'Alaska', 'Ellesmere', 'Illinois',
			'Colorado', 'Yukon', 'Alberta', 'Ontario', 'NewYork', 'Galileo'
		];
		var bracket1 = greekLetters[Math.floor(Math.random() * greekLetters.length)];
		var bracket2 = systemNames[Math.floor(Math.random() * systemNames.length)];
		var number = Math.floor(Math.random() * 1000);
		return bracket1 + '-Navy-' + bracket2 + '-' + number;
	}

	// ESRD style: BritishCity-RHW-Number
	var britishCities = [
		'Aegis', 'Apex', 'Archangel', 'Blackout', 'Broadsword',
    	'Cobalt', 'Crossbow', 'Echelon', 'Eclipse', 'Enigma',
    	'Falcon', 'Firewall', 'Goliath', 'Halberd', 'Keystone',
    	'Mirage', 'Nightwatch', 'Obsidian', 'Onyx', 'Overwatch',
    	'Paladin', 'Pinnacle', 'Sentinel', 'Vanguard', 'Wraith'
	];
	var city = britishCities[Math.floor(Math.random() * britishCities.length)];
	var number = Math.floor(Math.random() * 1000);
	return city + '-ESRD-' + number;
}

function renderRawTemplate() {
	if (!window.isRawTemplate || !window.currentRawTemplate) return;
	var form = document.form1;
	var now = new Date();
	var encryptionVal = (form.encryption && form.encryption.value.trim()) ? form.encryption.value.trim() : generateRandomEncryption();
	var values = {
		HEADERIMG: form.headerimg ? form.headerimg.value.trim() : '',
		TO: form.recipient ? form.recipient.value.trim() : '',
		FROM: form.commid ? form.commid.value.trim() : '',
		POSITION: form.position ? form.position.value.trim() : '',
		CHARPOSITION: form.charposition ? form.charposition.value.trim() : '',
		SUBJECT: form.subject ? form.subject.value.trim() : '',
		DATE: formatDDMMYYYY(now),
		ENCRYPTION: encryptionVal,
		MESSAGE: form.message ? form.message.value.trim() : '',
		NICKNAME: form.commid ? form.commid.value.trim() : '',
		ATTACHMENT_TITLE: form.titleattach ? form.titleattach.value.trim() : '',
		ATTACHMENT: form.attachment ? form.attachment.value.trim() : ''
	};
	var filled = window.currentRawTemplate;
	Object.keys(values).forEach(function(key) {
		if (values[key]) {
			var token = new RegExp('\{\{' + key + '\}\}', 'g');
			filled = filled.replace(token, values[key]);
		}
	});
	var output = document.getElementById('generatedBBCode');
	var rendered = document.getElementById('renderedBBCode');
	if (output) output.value = filled;
	if (rendered) rendered.innerHTML = renderBBCode(filled);
}

// --- initTemplateChooser template naming---
var templateFiles = [
	{ path: 'assets/templates/template.md', name: 'Standard Template' },
	{ path: 'assets/templates/template_comm.md', name: 'Standard Comm Template' },
	{ path: 'assets/templates/template_log.md', name: 'Standard Log Template' },
	{ path: 'assets/templates/template_esrd.md', name: 'ESRD Template' },
	{ path: 'assets/templates/template_esrd_comm.md', name: 'ESRD Comm Template' },
	{ path: 'assets/templates/template_esrd_log.md', name: 'ESRD Log Template' }
];

function loadTemplateFile(filePath) {
	return fetch(filePath)
		.then(function(res) { return res.text(); })
		.then(function(text) {
			var list = parseTemplates(text);
			if (list.length > 0) {
				applyTemplateValues(list[0]);
			}
			return list;
		});
}

function initTemplateChooser() {
	var select = document.getElementById('templateChooser');
	if (!select) return;
	select.innerHTML = '<option value="">- Select template -</option>';
	templateFiles.forEach(function(item, index) {
		var option = document.createElement('option');
		option.value = item.path;
		option.textContent = item.name;
		select.appendChild(option);
	});
	
	select.addEventListener('change', function() {
		if (!this.value) return;
		loadTemplateFile(this.value)
			.catch(function(err) {
				console.warn('Could not load template', this.value, err);
			});
	});

	// default load template.md
	select.value = templateFiles[0].path;
	loadTemplateFile(templateFiles[0].path).catch(function(err) {
		console.warn('Default template load failed', err);
	});
}

/* Initialization is handled by main.js */