from pathlib import Path
path = Path('index.html')
text = path.read_text(encoding='utf-8')
marker = '</form>'
insert = '''</form>
							<div id="bbcode-result" style="margin-top: 1rem;">
								<label for="generatedBBCode" style="display:block; margin-bottom:0.5rem;">Generated BBCode (copy/paste below):</label>
								<textarea id="generatedBBCode" readonly rows="8" style="width:100%; background: rgba(10, 8, 6, 0.9); color: #f7e7c1; border: 1px solid rgba(242, 203, 115, 0.5); padding:0.75rem; font-family: Consolas, Monaco, monospace;"></textarea>
								<div style="margin-top:0.75rem; display:flex; align-items:center; gap:0.75rem;">
									<label style="color:#f7e7c1;"><input type="checkbox" id="togglePreview"> Show rendered preview</label>
									<button id="btnCopyBBCode" style="padding:.5rem .75rem; background:#d4a84c; border:1px solid #f2cd84; color:#191907; font-weight:bold; border-radius:4px;">Copy</button>
								</div>
							</div>
							<div id="renderedBBCode" style="display:none; background: rgba(20, 16, 10, 0.76); border: 1px solid rgba(242, 203, 115, 0.4); padding: 1rem; margin-top: 1rem; border-radius: 6px; color: #f8f0dc; max-height: 360px; overflow:auto;"></div>'''
if marker not in text:
    raise SystemExit('marker not found')
text = text.replace(marker, insert, 1)
path.write_text(text, encoding='utf-8')
print('inserted block')
