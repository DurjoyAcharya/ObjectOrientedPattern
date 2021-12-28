<?php
interface Door{
    public function getHeight():float;
    public function getWidth():float;
}
class WoodenDoor implements Door
{
    protected $height;
    protected $width;
    public function __construct($height, $width)
    {
        $this->height = $height;
        $this->width = $width;
    }
    public function getHeight(): float
    {
        return $this->height;
    }
    public function getWidth(): float
    {
    return $this->width;
    }
}
class Doorfactory{
public static function makeDoor($length,$width):Door
{
    return new WoodenDoor($length,$width);
}
}
//uses of DoorFactory
$door=Doorfactory::makeDoor(150,160);
echo "Height: ".$door->getHeight();
echo "\n";
echo "Width: ".$door->getWidth();