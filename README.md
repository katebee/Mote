# Mote
##Genetics in JavaScript

See it in the current state: http://katebee.github.io/Mote/

Partly inspired by the excellent article: 'DNA seen through the eyes of a coder' (http://ds9a.nl/amazing-dna/).
Partly an opportunity to try out canvas and associated libraries.

#### THE PLAN:

<li>Build a simple, working analogy to represent gene expression.</li>
<li>DNA.sequence contains a string that uses only four letters (ATGC).</li>
<li>Mote will begin with three genes, and also include start codons and stop codons.</li>
<li>the genes will control the colour, size and ???</li>
<li>Proteins are objects, normally with one major function.</li>
<li>RNA polymerase (protein) has a function (transcribe) that takes the DNA variable as an argument, searches the string for a particular sequence (start codon) then attempts to read the string in three base blocks until it encounters a particular sequence (stop codon).</li>
<li>rnaPolymerase.transcribe(DNA.sequence) will return mRNA.</li>
<li>The ribosome object has a function (translate) that takes mRNA and produces the specified protein (object)</li>
<li>the proteins have functions that effect the phenotype (observable qualities) of the cell (colour, size).</li>

#### FURTHER GOALS:

<li>Cellular survival signals and API requests</li>
<li>Retroviruses and malicious code insertion into DNA.sequence</li>
<li>prions; broken objects that break other objects.</li>
<li>How cells deal with error checking and uncaught errors.</li>
<li>Tumour suppressor genes and unit tests. They can kill the program if it does not pass.</li>
<li>Proto-oncogenes and why timeOuts are important.</li>
<li>Write some documentation to explain all this and (hopefully) impart some understanding of genetics and epigenetics.</li>



