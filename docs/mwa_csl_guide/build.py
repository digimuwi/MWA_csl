import subprocess
import re
import os

file_name = "mwa_csl_guide"
tex_path  = file_name + ".tex"

TARGET_HTML = "html"
TARGET_PDF  = "pdf"

activate_strs = {
    TARGET_HTML: r"\\htmltrue",
    TARGET_PDF:  r"\\pdftrue"
}

def target_error(target):
    return ValueError(f"Invalid target: \'{target}\'. Expect one of {list(activate_strs.keys())}.")

def transform_to_target(target, text):
    if target not in activate_strs.keys():
        raise target_error(target)
    for t,s in activate_strs.items():
        if t != target:
            text = re.sub(s, "", text)
    return text

def compile_target(target, text):
    if target not in activate_strs.keys():
        raise target_error(target)
    # transform
    tex_text_target = transform_to_target(target, text)
    tex_path_target = ".temp_"+target+"_"+tex_path
    # temp write
    with open(tex_path_target, "w") as tex_file_target:
        tex_file_target.write(tex_text_target)
    # compile
    command = None
    if target == TARGET_PDF:
        command = [
            "pdflatex",
            "-jobname="+file_name,
            tex_path_target
        ]
    elif target == TARGET_HTML:
        command = [
            "pandoc", tex_path_target,
            "-o", file_name+".html",
            "--template=template.html",
            "--number-sections",
            "--verbose"
        ]
    if command:
        print(f"\nStart compilation for target \'{target}\':\n    {" ".join(command)}\n")
        subprocess.run(command)
    # temp clean
    os.remove(tex_path_target)
        
with open(tex_path, "r") as tex_file:
    tex_text = tex_file.read()
    compile_target(TARGET_PDF, tex_text)
    compile_target(TARGET_HTML, tex_text)

