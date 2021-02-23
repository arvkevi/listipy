# Listipy

`listipy` is a Visual Studio Code extension that will convert a selection of text to properly-formatted Python list.  
Install Listipy from the Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/items?itemName=arvkevi.listipy).

![](images/demo.gif)

## Features

`listipy` can handle several types of input.

### space-separated strings  

Before:  

```python
Pippen Bird Stockton Laettner Mullin
```

After:  

```python
["Pippen","Bird","Stockton","Laettner","Mullin"]
```

### tab-separated strings

Before:  

```python
Barkley Drexler Malone  Jordan
```

After:  

```python
["Barkley","Drexler","Malone","Jordan"]
```

### mixed tab/space separated strings

Before:  

```python
Barkley Bird    Drexler Ewing   Mullin
```

After:  

```python
["Barkley","Bird","Drexler","Ewing","Mullin"]
```

### comma-separated strings  

Before: 

```python
John Stockton, Michael Jordan, Charles Barkley, Larry Bird, Karl Malone
```

After: 

```python
["John Stockton"," Michael Jordan"," Charles Barkley"," Larry Bird"," Karl Malone"]
```

### newline-separated strings

Before:  

```python
David Robinson
Scottie Pippen
Karl Malone
Magic Johnson
Michael Jordan
```

After:  

```python
["David Robinson","Scottie Pippen","Karl Malone","Magic Johnson","Michael Jordan"]
```

## Known Issues

The `listipy` extension needs help with unit tests. I am not proficient in TypeScript, so it has been a slow process to get tests working. The framework exists, but does not test anything useful at the moment.

Please help!