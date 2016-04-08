# Simple Article Retrieval

## A website articles retrieval in Javascript

It includes a *highlight* function for testing, allowing to see visually the
words that are being selected.

**innerText vs textContent**

Both extract text from html content but have significant differences.
[Kellegous.com](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/)

`innerText` is compatible with all common browsers except Firefox 44-
- A rule was added in this case to use `innerHTML` with regex replace.
(showed better results than textContent - extensive tests can be down)

`innerHTML` just have some minor problems with IE tables but since all versions
of IE are going to use innerText by default, there is no problem.
