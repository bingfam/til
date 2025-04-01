# 한 각의 각도를 표시한 삼각형

[triangle.tex]

```tex
\documentclass{article}
\usepackage{tikz}
\usetikzlibrary{angles,quotes} % 각도 표시를 위한 라이브러리

\begin{document}
\begin{tikzpicture}
    % 원점을 기준으로 첫 번째 선 그리기
    \draw[thick] (0,0) -- (5,0);
    
    % 두 번째 선을 37.5도 각도로 그리기
    \draw[thick] (0,0) -- ++(37.5:5) -- (5,0);
    
    % 각도 표시
    \draw[thick] (0.8,0) arc [start angle=0, end angle=37.5, radius=0.8];
    \node at (1.3,0.4) {37.5$^\circ$};
\end{tikzpicture}
\end{document}
```

결과

![](img/20250401143129.png)