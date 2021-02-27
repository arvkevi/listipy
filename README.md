# Listipy

`listipy` is a Visual Studio Code extension that will convert a selection of text to properly-formatted Python list.  
Install Listipy from the Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/items?itemName=arvkevi.listipy).

![](images/demo.gif)

## Features

`listipy` can handle several types of input.

### space-separated strings  

Before:  

```python
Johnson Jordan Barkley Bird Ewing
```

After:  

```python
["Johnson", "Jordan", "Barkley", "Bird", "Ewing"]
```

### tab-separated strings

Before:  

```python
Johnson Jordan  Barkley Bird    Ewing
```

After:  

```python
["Johnson", "Jordan", "Barkley", "Bird", "Ewing"]
```

### mixed tab/space separated strings

Before:  

```python
Johnson Jordan  Barkley Bird Ewing
```

After:  

```python
["Johnson", "Jordan", "Barkley", "Bird", "Ewing"]
```

### comma-separated strings  

Before: 

```python
Magic Johnson, Michael Jordan, Charles Barkley, Larry Bird, Patrick Ewing
```

After: 

```python
["Magic Johnson", "Michael Jordan", "Charles Barkley", "Larry Bird", "Patrick Ewing"]
```

### comma-separated strings (no spaces) 

Before: 

```python
Magic Johnson,Michael Jordan,Charles Barkley,Larry Bird,Patrick Ewing
```

After: 

```python
["Magic Johnson", "Michael Jordan", "Charles Barkley", "Larry Bird", "Patrick Ewing"]
```

### newline-separated strings

Before:  

```python
Magic Johnson
Michael Jordan
Charles Barkley
Larry Bird
Patrick Ewing
```

After:  

```python
["Magic Johnson", "Michael Jordan", "Charles Barkley", "Larry Bird", "Patrick Ewing"]
```

## Known Issues

The `listipy` extension needs help with unit tests. I am not proficient in TypeScript, so it has been a slow process to get tests working. The framework exists, but does not test anything useful at the moment.

Please help!