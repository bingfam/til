# pdf

## pdf 파일 쪼개기
```ps
pip install pypdf
```

```python
from pypdf import PdfReader, PdfWriter
import os

def split_pdf_by_ranges(input_pdf_path, page_ranges, output_folder="split_ranges"):
    """
    PDF 파일을 지정된 페이지 범위별로 분리합니다.

    Args:
        input_pdf_path (str): 분리할 PDF 파일의 경로.
        page_ranges (list of tuples): (시작 페이지, 끝 페이지) 형태의 튜플 리스트 
                                      예: [(1, 3), (4, 5)]는 1-3페이지와 4-5페이지를 의미.
        output_folder (str): 분리된 PDF 파일이 저장될 폴더.
    """
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    try:
        reader = PdfReader(input_pdf_path)
        print(f"'{input_pdf_path}'에서 {len(reader.pages)} 페이지를 찾았습니다.")

        # input_pdf_path에서 파일 이름과 확장자를 분리
        input_file_name = os.path.splitext(os.path.basename(input_pdf_path))[0]

        for i, (start_page0, end_page0) in enumerate(page_ranges):
            start_page = start_page0 - 1
            end_page = end_page0 - 1

            writer = PdfWriter()
            if start_page < 0 or end_page >= len(reader.pages) or start_page > end_page:
                print(f"경고: 유효하지 않은 페이지 범위 [{start_page+1}-{end_page+1}]. 건너뜁니다.")
                continue

            for page_num in range(start_page, end_page + 1):
                writer.add_page(reader.pages[page_num])

            #output_pdf_path = os.path.join(output_folder, f"output_part_{i + 1}_pages_{start_page+1}-{end_page+1}.pdf")

            # 0 패딩한 2자리 숫자로 파일 이름 지정
            part_number = str(i + 1).zfill(2)
            output_pdf_path = os.path.join(output_folder, f"{input_file_name}-{part_number}.pdf")
            with open(output_pdf_path, "wb") as output_pdf:
                writer.write(output_pdf)
            print(f"페이지 {start_page+1}부터 {end_page+1}까지를 '{output_pdf_path}'로 저장했습니다.")
        print(f"PDF 파일 분리가 완료되었습니다. 결과는 '{output_folder}' 폴더에 있습니다.")

    except Exception as e:
        print(f"PDF 파일을 분리하는 중 오류가 발생했습니다: {e}")

if __name__ == "__main__": # 이 부분을 "__main__"으로 변경하여 실행하세요
    # 예시 사용법:
    # 1. 'input.pdf' 파일을 이 스크립트와 같은 디렉토리에 넣어주세요.
    # 2. 실행하면 'split_ranges' 폴더에 지정된 페이지 범위별로 저장됩니다.
    input_pdf = "input.pdf" # 여기에 분리할 PDF 파일 이름을 입력하세요.

    # 만약 10페이지짜리 PDF가 있다면, 처음 5페이지와 다음 5페이지로 분리:
    page_ranges_to_split = [(1, 5), (6, 10)]

    split_pdf_by_ranges(input_pdf, page_ranges_to_split)
```


## 기존 pdf 파일에 첫 페이지 생성하고 거기에 이미지 추가하기

```ps
pip install pymupdf
```

```python
import fitz  # PyMuPDF

input_pdf = "input.pdf"  # 기존 PDF 파일 경로
output_pdf = "output.pdf"  # 이미지가 추가된 새 PDF 저장 경로
image_file = "cover.jpg"  # 삽입할 이미지 파일 경로

# 기존 PDF 열기
pdf_document = fitz.open(input_pdf)

# 새 PDF 페이지 생성 (원하는 크기, 예: 기존 첫 페이지 크기와 같게)
if 0 < pdf_document.page_count:
    first_page_rect = pdf_document[0].rect
else:
    first_page_rect = fitz.Rect(0, 0, 595, 842)  # A4 크기 기본값

new_page = pdf_document.new_page(pno=0, width=first_page_rect.width, height=first_page_rect.height)

# 새 페이지에 이미지 삽입 위치 지정 (페이지 전체 크기로 맞추거나 조절 가능)
rect = fitz.Rect(0, 0, first_page_rect.width, first_page_rect.height)

# 이미지 삽입
new_page.insert_image(rect, filename=image_file)

# 수정된 PDF 저장
pdf_document.save(output_pdf)
```