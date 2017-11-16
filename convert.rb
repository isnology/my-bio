require 'htmltoword'

file = File.open("_resume.html", "rb")
my_html = file.read
document = 'resume.docx'

file2 = Htmltoword::Document.create_and_save(my_html, document)