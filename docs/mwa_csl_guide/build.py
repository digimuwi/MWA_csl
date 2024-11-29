import subprocess
import re
import os
import html

file_name = "mwa_csl_guide"
tex_path  = file_name + ".tex"

TARGET_HTML = "html"
TARGET_PDF  = "pdf"

tex_boolean_strs = {
    TARGET_HTML: r"\\htmltrue",
    TARGET_PDF:  r"\\pdftrue"
}

def target_error(target):
    return ValueError(f"Invalid target: \'{target}\'. Expect one of {list(tex_boolean_strs.keys())}.")

def transform_to_target(target, text):
    if target not in tex_boolean_strs.keys():
        raise target_error(target)
    # primitive transform
    for t,s in tex_boolean_strs.items():
        if t != target:
            text = re.sub(s, "", text)
    return text

def target_file_name(target):
    if target not in tex_boolean_strs.keys():
        raise target_error(target)
    if target == TARGET_PDF:
        return file_name+".pdf"
    elif target == TARGET_HTML:
        return file_name+".html"

def compile_target(target, text):
    if target not in tex_boolean_strs.keys():
        raise target_error(target)
    # transform
    tex_text_target = transform_to_target(target, text)
    tex_path_target = ".temp_"+target+"_"+tex_path
    # temp write
    print(tex_text_target)
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
            "-o", target_file_name(target),
            "--template=template.html",
            "--number-sections",
            "--verbose"
        ]
    if command:
        print(f"\nStart compilation for target \'{target}\':\n    {" ".join(command)}\n")
        returncode = subprocess.run(command).returncode
        if returncode == 0:
            postprocess_target(target)
    # temp clean
    os.remove(tex_path_target)

def postprocess_target(target):
    if target not in tex_boolean_strs.keys():
        raise target_error(target)
    if target == TARGET_PDF:
        return
    if target == TARGET_HTML:
        target_text = None
        with open(target_file_name(target), "r", encoding="utf-8") as target_file:
            target_text = target_file.read()
        with open(target_file_name(target), "w", encoding="utf-8") as target_file:
            target_text = re.sub(r"htmlunmask\{(.*?)\}", lambda m: html.unescape(m.group(1)), target_text)
            target_file.write(target_text)

# TODO: support command line options (target choice, ...)
def main():
    with open(tex_path, "r") as tex_file:
        tex_text = tex_file.read()
        compile_target(TARGET_PDF, tex_text)
        compile_target(TARGET_HTML, tex_text)

if __name__ == "__main__":
    main()

